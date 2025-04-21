
import { supabase } from "@/integrations/supabase/client";
import { Order, OrderItem } from "@/types";

export const createOrder = async (userId: string, totalAmount: number, items: OrderItem[]): Promise<Order> => {
  // First create the order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([
      {
        user_id: userId,
        total_amount: totalAmount,
        status: 'pending'
      }
    ])
    .select()
    .single();
    
  if (orderError) {
    console.error("Error creating order:", orderError);
    throw orderError;
  }
  
  // Then create the order items
  const orderItems = items.map(item => ({
    order_id: order.id,
    product_id: item.product_id,
    quantity: item.quantity,
    price: item.price
  }));
  
  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems);
    
  if (itemsError) {
    console.error("Error creating order items:", itemsError);
    throw itemsError;
  }
  
  return order;
};

export const updateOrderWithScreenshot = async (orderId: string, screenshotUrl: string): Promise<void> => {
  const { error } = await supabase
    .from('orders')
    .update({
      payment_screenshot: screenshotUrl,
      status: 'processing'
    })
    .eq('id', orderId);
    
  if (error) {
    console.error("Error updating order with screenshot:", error);
    throw error;
  }
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      items:order_items(*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
  
  return data || [];
};

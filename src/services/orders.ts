
import { supabase } from "@/integrations/supabase/client";
import { Order, OrderItem } from "@/types";
import { toast } from "@/components/ui/use-toast";

// Fix: correct types and Supabase API usage
export const createOrder = async (
  userId: string,
  totalAmount: number,
  items: { product_id: number; quantity: number; price: number }[]
): Promise<Order> => {
  // Insert order first
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      total_amount: totalAmount,
      status: "pending",
    })
    .select()
    .single();

  if (orderError) {
    console.error("Error creating order:", orderError);
    toast({
      title: "Error",
      description: `Failed to create order: ${orderError.message}`,
      variant: "destructive"
    });
    throw orderError;
  }

  console.log("Order created successfully:", order);

  // Insert each item with their order_id
  if (items.length > 0) {
    const orderItems = items.map(item => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }));

    console.log("Inserting order items:", orderItems);

    // Make sure we're authenticated
    const { data: authData } = await supabase.auth.getSession();
    if (!authData.session) {
      throw new Error("No authenticated session found");
    }

    // Insert order items
    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemsError) {
      console.error("Error creating order items:", itemsError);
      toast({
        title: "Error",
        description: `Failed to create order items: ${itemsError.message}`,
        variant: "destructive"
      });
      throw itemsError;
    }
  }

  return order;
};

export const updateOrderWithScreenshot = async (orderId: string, screenshotUrl: string): Promise<void> => {
  const { error } = await supabase
    .from("orders")
    .update({
      payment_screenshot: screenshotUrl,
      status: "processing",
    })
    .eq("id", orderId);

  if (error) {
    console.error("Error updating order with screenshot:", error);
    toast({
      title: "Error",
      description: `Failed to update order: ${error.message}`,
      variant: "destructive"
    });
    throw error;
  }
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      items:order_items(*)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching user orders:", error);
    toast({
      title: "Error",
      description: `Failed to fetch orders: ${error.message}`,
      variant: "destructive"
    });
    throw error;
  }

  return data || [];
};

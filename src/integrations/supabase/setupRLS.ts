
// This file contains logic to initialize RLS policies
import { supabase } from "./client";

// This function should be called only once when the app is first initialized
export const setupInitialRLSPolicies = async () => {
  try {
    // Create RLS policies for order_items table
    const { error } = await supabase.rpc('setup_order_items_rls', {}, {
      count: 'exact'
    });
    
    if (error) {
      console.error('Error setting up RLS policies:', error);
    } else {
      console.log('RLS policies for order_items set up successfully');
    }
  } catch (error) {
    console.error('Error in RLS setup:', error);
  }
};

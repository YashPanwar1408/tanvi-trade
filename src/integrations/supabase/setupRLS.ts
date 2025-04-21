
import { supabase } from "@/integrations/supabase/client";

// This file contains logic to initialize RLS policies
export const setupInitialRLSPolicies = async () => {
  try {
    // Using a direct fetch call instead of problematic rpc call
    const response = await fetch(`https://vlsjblxgodfvmzmsaggz.supabase.co/rest/v1/rpc/setup_order_items_rls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsc2pibHhnb2Rmdm16bXNhZ2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzUyMjAsImV4cCI6MjA2MDgxMTIyMH0.TEcGW7gOdZ8HSkZbmn5F2DIMu81SHYD1LtGE8yHAhrk',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsc2pibHhnb2Rmdm16bXNhZ2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzUyMjAsImV4cCI6MjA2MDgxMTIyMH0.TEcGW7gOdZ8HSkZbmn5F2DIMu81SHYD1LtGE8yHAhrk`
      },
      body: JSON.stringify({})
    });
    
    if (!response.ok) {
      console.error("Error setting up RLS policies:", await response.text());
    } else {
      console.log("RLS policies for order_items set up successfully");
    }
  } catch (error) {
    console.error("Error in RLS setup:", error);
  }
};

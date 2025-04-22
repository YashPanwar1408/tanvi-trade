
import { supabase } from "@/integrations/supabase/client";
import { Brand } from "@/types";

export const getBrands = async (): Promise<Brand[]> => {
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }

  return data || [];
};

export const getBrandBySlug = async (slug: string): Promise<Brand | null> => {
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching brand with slug ${slug}:`, error);
    throw error;
  }

  return data;
};

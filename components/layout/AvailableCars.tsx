import { supabase } from '@/utils/supabase/client';
import { ExpandableCard } from '../ui/ExpandableCard';

export default async function AvailableCars() {
  console.log("data");
  
  // Server-side data fetching
  const { data, error } = await supabase.from('cars').select('*');
  
  if (error) {
    console.error('Error fetching cars:', error);
    return <div>Error fetching cars</div>;
  }

  // Pass the data to the client component
  return <ExpandableCard  cards={data} />;
}

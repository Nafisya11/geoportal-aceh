import { Leaf } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Perkebunan() {
  return (
    <SectorCard
      title="Perkebunan"
      description="Sebaran kebun Kopi Gayo, kelapa sawit, nilam Aceh, dan luas izin HGU."
      search="perkebunan"
      icon={Leaf}
    />
  );
}

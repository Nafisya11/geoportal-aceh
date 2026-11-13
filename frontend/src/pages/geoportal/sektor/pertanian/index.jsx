import { Wheat } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Pertanian() {
  return (
    <SectorCard
      title="Pertanian"
      description="Peta sawah irigasi, angka produksi padi, dan daftar kelompok tani (Poktan)."
      search="pertanian"
      icon={Wheat}
    />
  );
}

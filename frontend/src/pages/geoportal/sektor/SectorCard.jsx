import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function SectorCard({ title, description, search, icon: Icon }) {
  return (
    <article className="flex flex-col border border-[#d3d9df] bg-[#f8f9fa] p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#c5d0dc] bg-white text-[#14365d]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-[16px] font-semibold text-[#14365d]">{title}</h3>
      <p className="mt-2 flex-grow text-[13.5px] leading-relaxed text-[#4b5660]">{description}</p>
      <Link
        to={`/katalog?search=${encodeURIComponent(search)}`}
        className="mt-4 inline-flex items-center gap-1 self-start text-[13px] font-semibold text-[#1f6fb2] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1f6fb2]"
      >
        Lihat data sektor <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

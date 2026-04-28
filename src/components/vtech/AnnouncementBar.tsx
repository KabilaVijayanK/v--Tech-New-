import { Calendar, MapPin } from "lucide-react";

export const AnnouncementBar = () => (
  <div className="bg-navy-deep text-white text-xs sm:text-sm">
    <div className="container-x py-2.5 flex items-center justify-center gap-2 sm:gap-4 text-center">
      <span className="hidden sm:inline-flex items-center gap-1.5 text-white/70">
        <Calendar className="w-3.5 h-3.5 text-accent-red" /> 12–15 Nov 2026
      </span>
      <span className="hidden sm:block w-px h-3 bg-white/20" />
      <span className="font-semibold uppercase tracking-wider">
        Visit us at IndiaPack 2026
      </span>
      <span className="hidden sm:block w-px h-3 bg-white/20" />
      <span className="hidden sm:inline-flex items-center gap-1.5 text-white/70">
        <MapPin className="w-3.5 h-3.5 text-accent-red" /> Mumbai · Booth A-42
      </span>
    </div>
  </div>
);

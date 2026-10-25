import type { Room } from "@/lib/types";

interface ReservationProps {
  room:Room;
}
const Reservation = ({ room }: ReservationProps) => {
  return (
    <section className="mt-10 md:mt-0">
      <form
        onSubmit={() => {}}
        className="bg-card-foreground text-background rounded-lg px-6 pt-8 pb-6"
      >
        <div className="relative mb-4 flex items-center justify-between after:bg-primary after:absolute after:bottom-0.5 after:h-[3.5px] after:w-full after:content-['']">
          
        </div>
      </form>
    </section>
  );
};
export default Reservation;
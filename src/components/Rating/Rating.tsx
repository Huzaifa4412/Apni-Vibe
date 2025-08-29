import Image from "next/image";

interface RatingProps {
  rating: number; // e.g., 4.5
}

export default function Rating({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-3">
      <div className="star active flex items-center gap-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <div key={index}>
            <Image
              src={"/products/rating.svg"}
              alt="Full Star"
              width={25}
              height={25}
            />
          </div>
        ))}
        {hasHalfStar && (
          <div>
            <Image
              src={"/products/ratingHalf.svg"}
              alt="Half Star"
              width={25}
              height={25}
            />
          </div>
        )}
      </div>
      <div>
        <span className="text-black text-xl">{rating}</span>/5
      </div>
    </div>
  );
}

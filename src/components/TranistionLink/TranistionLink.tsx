"use client";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/utils/animate";

interface Props {
  href: string;
  label: string;
}

export const TransitionLink: React.FC<Props> = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const HandleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className="text-neutral-950 hover:text-neutral-700"
      onClick={() => {
        HandleClick();
      }}
    >
      {label}
    </button>
  );
};

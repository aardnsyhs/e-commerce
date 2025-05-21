import { Github, Instagram, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: "Instagram",
    href: "https://instagram.com/aardnsyhs",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/aardnsyhs",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/ardiansyah-sulistyo-832a792b8/",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_orange hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

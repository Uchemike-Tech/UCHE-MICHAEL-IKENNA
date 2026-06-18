import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

const RESUME_URL = "/Uche_Michael_Ikenna_Resume.pdf";

export function ResumeTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 gap-0 flex flex-col [&>button.absolute]:hidden">
        <div className="flex items-center justify-between px-2 border-b hairline h-8 shrink-0">
          <a href={RESUME_URL} download>
            <Button variant="default" size="sm" className="gap-1 h-6 text-[11px] px-2.5">
              <Download size={11} /> Download
            </Button>
          </a>
          <DialogClose className="grid place-items-center h-6 w-6 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
            <X size={14} />
          </DialogClose>
        </div>
        <div className="flex-1 min-h-0">
          <iframe
            src={RESUME_URL}
            className="w-full h-full border-0"
            title="Resume Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

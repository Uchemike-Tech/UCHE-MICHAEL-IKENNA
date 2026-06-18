import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const RESUME_URL = "/Uche_Michael_Ikenna_Resume.pdf";

export function ResumeTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 gap-0">
        <div className="flex items-center justify-between px-4 border-b hairline h-10">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <FileText size={12} />
            Resume.pdf
          </div>
          <a href={RESUME_URL} download>
            <Button variant="default" size="sm" className="gap-1.5 h-7 text-xs px-3">
              <Download size={12} /> Download
            </Button>
          </a>
        </div>
        <div className="flex-1 w-full h-full min-h-0">
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

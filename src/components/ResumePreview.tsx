import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const RESUME_URL = "/Uche_Michael_Ikenna_Resume.pdf";

export function ResumeTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 gap-0">
        <div className="flex items-center justify-between px-6 py-3 border-b hairline">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText size={14} />
            Uche_Michael_Ikenna_Resume.pdf
          </div>
          <a href={RESUME_URL} download>
            <Button variant="default" size="sm" className="gap-1.5">
              <Download size={14} /> Download
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

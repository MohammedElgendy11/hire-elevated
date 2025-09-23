import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Building2, Upload, CheckCircle, FileText, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

const FormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  documents: z.any().optional(),
});

interface FreeTrialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FreeTrialModal = ({ open, onOpenChange }: FreeTrialModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
    },
  });

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    Array.from(files).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(`${file.name} (too large - max 20MB)`);
      } else if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        invalidFiles.push(`${file.name} (invalid format - only PDF, DOC, DOCX allowed)`);
      } else {
        validFiles.push(file);
      }
    });

    if (invalidFiles.length > 0) {
      toast({
        title: "Some files couldn't be uploaded",
        description: invalidFiles.join(", "),
        variant: "destructive",
      });
    }

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Free Trial Started!",
        description: "Your documents have been received. We'll contact you soon.",
      });
      
      // Reset form and close modal after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setUploadedFiles([]);
        form.reset();
        onOpenChange(false);
      }, 3000);
    }, 1000);
  }

  const handleClose = () => {
    if (!isSubmitted) {
      form.reset();
      setUploadedFiles([]);
      onOpenChange(false);
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('word') || fileType.includes('document')) return '📝';
    return '📎';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {!isSubmitted ? (
          <>
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl font-bold text-center">
                Start Your Free Trial
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                Upload your documents and let our AI analyze your recruitment needs. 
                Get started with a personalized trial experience.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          type="email"
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your company name" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Upload */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <Upload className="w-4 h-4 text-primary" />
                    Upload Documents (Optional)
                  </label>
                  
                  {/* Drop Zone */}
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer",
                      isDragOver 
                        ? "border-primary bg-accent/50" 
                        : "border-border hover:border-primary/50 hover:bg-accent/20"
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
                      <div className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">Click to upload</span> or drag and drop
                      </div>
                      <div className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX (max 20MB each)
                      </div>
                    </div>
                  </div>

                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Uploaded Files:</p>
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between p-3 bg-accent/20 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{getFileIcon(file.type)}</span>
                            <div>
                              <p className="text-sm font-medium truncate max-w-[200px]">
                                {file.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="h-8 w-8 p-0 hover:bg-destructive/20"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero h-12 text-lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Starting Trial..." : "Start Free Trial"}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold gradient-text">Thank You!</h3>
              <p className="text-muted-foreground">
                Your documents have been received. We'll contact you soon with your personalized trial setup.
              </p>
              <div className="text-sm text-muted-foreground">
                {uploadedFiles.length > 0 && (
                  <p>📎 {uploadedFiles.length} document{uploadedFiles.length > 1 ? 's' : ''} uploaded successfully</p>
                )}
                <p>This window will close automatically in a few seconds.</p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FreeTrialModal;
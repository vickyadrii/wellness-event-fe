import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Spin } from "@/components/ui/spin";
import { useToast } from "@/components/ui/use-toast";
import { ResponseErrorJSON, ResponseSuccessJSON } from "@/types/response";
import { api } from "@/configs";

const formSchema = z.object({
  event_name: z.string().min(4, "Event name must be at least 4 characters long"),
  company_name: z.string().min(4, "Company name must be at least 4 characters long"),
  proposed_dates: z.array(z.date()).nonempty("At least one date must be proposed"),
  location: z.string().min(4, "Location must be at least 4 characters long"),
  event_id: z.string().min(4, "Event ID must be at least 4 characters long"),
  created_by: z.string().optional(),
});

const AddEvent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_name: "",
      company_name: "",
      proposed_dates: [],
      location: "",
      event_id: "",
      created_by: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const res: ResponseSuccessJSON = await api.post("/api/events/", values);

      toast({
        title: "Success!",
        description: res?.message,
        duration: 2500,
      });
    } catch (error) {
      const err = error as ResponseErrorJSON;
      console.log(err);

      toast({
        title: "Error!",
        description: err?.response?.data?.message ?? "Oops Something Wrong!",
        duration: 2500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="primaryOutline" className="flex items-center gap-2">
            <Plus className="w-5 h-5" /> Create Event
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-8">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="event_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Event name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Company name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="proposed_dates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proposed Dates</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Proposed dates (comma separated)..."
                          value={field?.value?.map((date) => date.toISOString().split("T")[0]).join(", ")}
                          onChange={(e) => {
                            field.onChange(e.target.value.split(", ").map((date) => new Date(date)));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Location..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button variant="primary" size="lg" type="submit">
                  {isLoading ? <Spin /> : "Submit"}
                </Button>
              </div>
            </form>
          </Form>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondaryOutline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEvent;

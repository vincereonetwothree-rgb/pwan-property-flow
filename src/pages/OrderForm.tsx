import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PWANContainer } from "@/components/ui/pwan-container";
import { PWANSection } from "@/components/ui/pwan-section";
import { useToast } from "@/hooks/use-toast";

const orderFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  preferredPlace: z.string().min(1, "Please select a preferred place"),
  additionalNotes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

const OrderForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const propertyName = searchParams.get("property") || "Selected Property";

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      preferredTime: "",
      preferredPlace: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: OrderFormData) => {
    console.log("Order form submitted:", data);
    toast({
      title: "Order Submitted Successfully!",
      description: "We'll contact you within 24 hours to schedule your meeting.",
    });
    
    // In a real app, you would send this data to your backend
    // For now, we'll just navigate back to the home page
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <PWANContainer>
        <PWANSection className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-4 text-neutral-600 hover:text-pwan-navy"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Properties
              </Button>
              
              <h1 className="text-3xl font-bold text-pwan-navy mb-2">
                Schedule a Meeting
              </h1>
              <p className="text-neutral-600">
                Interested in <span className="font-medium text-pwan-navy">{propertyName}</span>? 
                Fill out the form below and we'll get in touch to arrange a viewing.
              </p>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-pwan-navy font-medium">
                          <User className="w-4 h-4 mr-2" />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-pwan-navy font-medium">
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 234 9026429948"
                            {...field}
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferred Time of Meeting */}
                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-pwan-navy font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          Preferred Time of Meeting
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select your preferred time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                            <SelectItem value="weekend">Weekend</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferred Place of Meeting */}
                  <FormField
                    control={form.control}
                    name="preferredPlace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-pwan-navy font-medium">
                          <MapPin className="w-4 h-4 mr-2" />
                          Preferred Place of Meeting
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select meeting location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="property-site">At the Property Site</SelectItem>
                            <SelectItem value="pwan-office">PWAN Office</SelectItem>
                            <SelectItem value="virtual">Virtual Meeting</SelectItem>
                            <SelectItem value="other">Other Location</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pwan-navy font-medium">
                          Additional Notes (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific requirements or questions about the property?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full h-12 text-lg font-medium"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Schedule Meeting"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </PWANSection>
      </PWANContainer>
    </div>
  );
};

export default OrderForm;
-- Create table for property inquiries
CREATE TABLE public.property_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  preferred_place TEXT NOT NULL,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.property_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (since no authentication)
CREATE POLICY "Anyone can insert property inquiries" 
ON public.property_inquiries 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow reading inquiries (for admin purposes if needed later)
CREATE POLICY "Anyone can view property inquiries" 
ON public.property_inquiries 
FOR SELECT 
TO anon, authenticated
USING (true);
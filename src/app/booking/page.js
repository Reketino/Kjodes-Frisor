"use client";

import { useEffect } from "react";
import BookingLoader from "@/components/booking/BookingLoader";

const BOOKING_URL = 
"https://booking.easysalon.no/5e80c0b6-24ab-4f8d-a88e-015ef5fdee34";

export default function BookingPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.replace(BOOKING_URL);
        }, 800);
        
        return () => clearTimeout(timer);
    }, []);
    
}
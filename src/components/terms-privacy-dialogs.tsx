"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export function TermsPrivacyDialogs() {
  const [privacyText, setPrivacyText] = useState('');
  const [termsText, setTermsText] = useState('');

  useEffect(() => {
    fetch('/privacy.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }
        return response.text();
      })
      .then((text) => {
        setPrivacyText(text);
      })
      .catch((error) => {
        console.error('Error fetching privacy policy:', error);
        setPrivacyText('Could not load privacy policy.');
      });
  }, []);

  useEffect(() => {
    fetch('/terms.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch terms of service');
        }
        return response.text();
      })
      .then((text) => {
        setTermsText(text);
      })
      .catch((error) => {
        console.error('Error fetching terms of service:', error);
        setTermsText('Could not load terms of service.');
      });
  }, []);

  return (
    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      <Dialog>
        <DialogTrigger>
          <a href="#" className="hover:text-primary text-center text-xs text-balance underline underline-offset-4">Terms of Service</a>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Terms of Service</DialogTitle>
          {termsText}
        </DialogContent>
      </Dialog>
      {" "}and{" "}
      <Dialog>
        <DialogTrigger>
          <a href="#" className="hover:text-primary text-center text-xs text-balance underline underline-offset-4">Privacy Policy</a>
        </DialogTrigger>

        <DialogContent>
        <DialogTitle>Privacy Policy</DialogTitle>
          {privacyText}
        </DialogContent>
      </Dialog>
    </div>
  );
} 
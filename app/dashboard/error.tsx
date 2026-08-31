"use client";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button, Card } from "@/components/ui";
export default function Error({error,reset}:{error:Error&{digest?:string};reset:()=>void}){useEffect(()=>{console.error(error)},[error]);return <div className="grid min-h-screen place-items-center p-6"><Card className="max-w-md p-8 text-center"><AlertTriangle className="mx-auto h-8 w-8 text-risk-high"/><h1 className="mt-4 font-display text-2xl font-semibold">Something went wrong</h1><p className="mt-2 text-sm text-muted">The Foundation UI could not render this view. Try again.</p><Button className="mt-6" onClick={()=>reset()}>Try again</Button></Card></div>}

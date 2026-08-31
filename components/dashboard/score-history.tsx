"use client";
import { Card } from "@/components/ui";
import { scoreHistory } from "@/lib/demo/data";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
export function ScoreHistory(){return <Card className="p-5 sm:p-6"><div><p className="text-sm font-semibold">Score evolution</p><p className="mt-1 text-xs text-muted">Demo history · last 7 days</p></div><div className="mt-6 h-64 w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={scoreHistory} margin={{left:-25,right:5,top:10,bottom:0}}><XAxis dataKey="name" tick={{fontSize:11}} axisLine={false} tickLine={false}/><YAxis domain={[50,100]} tick={{fontSize:11}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{background:"var(--privacy-surface)",border:"1px solid var(--privacy-border)",borderRadius:12,fontSize:12}}/><Line type="monotone" dataKey="score" stroke="#19D3C5" strokeWidth={3} dot={{r:3}} activeDot={{r:5}}/></LineChart></ResponsiveContainer></div></Card>}

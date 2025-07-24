"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", quantity: 40000, fill: "var(--color-chrome)" },
  { browser: "safari", quantity: 160403, fill: "var(--color-safari)" },
  { browser: "firefox", quantity: 389500, fill: "var(--color-firefox)" },
  { browser: "edge", quantity: 610892, fill: "var(--color-edge)" },
  { browser: "other", quantity: 850045, fill: "var(--color-other)" },
]

const chartConfig = {
  quantity: {
    label: "Quantity",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cement Metric Tonns delivered</CardTitle>
        <CardDescription>Year 2020 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="quantity"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="quantity"
              type="natural"
              stroke="var(--color-quantity)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.browser}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Leading cement provider with expanding services and clientele <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Displaying the overall quantity delivered over the past five years.
        </div>
      </CardFooter>
    </Card>
  )
}

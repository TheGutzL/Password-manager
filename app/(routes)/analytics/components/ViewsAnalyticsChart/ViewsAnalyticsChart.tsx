"use client";

import { ViewsAnalyticsChartProps } from "./ViewsAnalyticsChart.types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

export const description = "A donut chart with text";

const ViewsAnalyticsChart = ({
  repeated,
  unique,
}: ViewsAnalyticsChartProps) => {
  const chartData = useMemo(
    () => [
      { browser: "unique", visitors: unique, fill: "var(--color-chrome)" },
      { browser: "repeated", visitors: repeated, fill: "var(--color-safari)" },
    ],
    [repeated, unique]
  );

  const chartConfig = {
    visitors: {
      label: "Password totals",
    },
    chrome: {
      label: "Unique Passwords",
      color: "hsl(var(--chart-3))",
    },
    safari: {
      label: "Repeated Passwords",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Passwords</CardTitle>
        <CardDescription>Repeated vs Unique</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Password created
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Try to don&apos;t have the same passwords
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total passwords created
        </div>
      </CardFooter>
    </Card>
  );
};

export default ViewsAnalyticsChart;

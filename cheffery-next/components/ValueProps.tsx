import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Value = { title: string; description: string };

export default function ValueProps({ values }: { values: Value[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((v) => (
        <Card key={v.title} className="">
          <CardHeader>
            <CardTitle>{v.title}</CardTitle>
            <CardDescription>{v.description}</CardDescription>
          </CardHeader>
          <CardContent />
        </Card>
      ))}
    </div>
  );
}




import ClassCard from "@/components/classes/ClassCard";

const classes = [
  {
    title: "English class for beginners",
    subtitle: "Start learning now",
  },
  {
    title: "Spanish class for beginners",
    subtitle: "Start learning now",
  },
  {
    title: "Math tutoring for high school",
    subtitle: "Start learning now",
  },
];

export default function Classes() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="mt-8 flex flex-col gap-4">
        {classes.map(({ title, subtitle }) => (
          <ClassCard key={title} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
}

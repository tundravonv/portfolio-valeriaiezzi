import { redirect } from "next/navigation";
// Old case-study URLs redirect to new /projects/ routes.
export default function OldCaseStudyPage({ params }: { params: { slug: string } }) {
  redirect(`/projects/${params.slug}`);
}

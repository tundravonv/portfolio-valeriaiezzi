import { redirect } from "next/navigation";
// This page is not used in the current design — redirects to homepage.
export default function AboutPage() {
  redirect("/");
}

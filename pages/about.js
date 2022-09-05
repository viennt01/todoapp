import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <>
      <h1>wellcome details</h1>
      <button type="button" onClick={() => router.push("/about")}>
        details of the applications
      </button>
    </>
  );
}

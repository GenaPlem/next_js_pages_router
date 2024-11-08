import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  const dynamicQuery = router.query.id;

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>{dynamicQuery}</p>
    </div>
  );
}

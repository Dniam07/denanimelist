import Card from "@/components/animelist/Card";
import Header from "@/components/animelist/Header";
import Link from "next/link";

const Page = async ({ params }) => {
  const keyword = params.keyword
  console.log(keyword);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const topAnime = await response.json()
  console.log(topAnime);


  return (
    <>
      <Header
        title={`Pencarian Untuk ${keyword}`}

      />

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-5 place-items-center  gap-6 mb-4">
        <Card api={topAnime} />
      </div>

    </>

  );
}
export default Page


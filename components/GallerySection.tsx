import Image from "next/image"
import Title from "./ui/title"
import { IImage, images } from "@/app/gallery/page"
import { Button } from "./ui/button"
import Link from "next/link"


const GallerySection = () => {
  return (
    <div className="padding flex flex-col gap-8 items-center">
        <Title title="Gallery" />
        <h1 className='text-2xl font-bold'>Photos from our gallery</h1>
        <Button asChild className= "bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-40">
          <Link href="/gallery">View all Photos</Link>
        </Button>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.slice(0,5).map((image: IImage, index: number) => (
          <Image
            key={index}
            alt="Hello"
            src={image.url}
            width={400}
            height={400}
            className="hover:opacity-50 cursor-pointer transition "
          />
        ))}
      </div>

    </div>
  )
}

export default GallerySection

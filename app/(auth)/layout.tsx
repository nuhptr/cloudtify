import Image from "next/image"

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <main className="relative h-screen w-full">
         <div className="absolute size-full">
            <Image src="/images/img_background.png" className="size-full" alt="background" />
         </div>
         {children}
      </main>
   )
}

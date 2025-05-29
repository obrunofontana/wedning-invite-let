"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function WeddingInvitation() {
  const handleLocationClick = () => {
    const address = "Estância Pico do Nascer, Manguerinha, PR"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/wedding-background.jpeg')",
        }}
      />

      <div className="absolute inset-0 z-5 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-8 py-12 text-center">

        <div className="w-full">
          <div className="text-[#FFF] drop-shadow-lg text-2xl font-serif tracking-widest mb-6">
            L <span className="mx-1">|</span> W
          </div>

          <div className="mb-8 px-4">
            <p className="text-[#FFF] drop-shadow-lg text-sm font-light italic">
              "O AMOR É PACIENTE, É BONDOSO, NÃO INVEJA, NÃO SE VANGLORIA, NÃO SE ORGULHA."
            </p>
            <p className="text-[#FFF] drop-shadow-lg text-xs mt-1">1 CORÍNTIOS 13:4</p>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-[#FFF] drop-shadow-lg text-5xl font-serif mb-2">LETICIA</h1>
          <div className="text-[#FFF] drop-shadow-lg text-6xl font-serif font-light mb-2">&</div>
          <h1 className="text-[#FFF] drop-shadow-lg text-5xl font-serif mb-6">WILLIAN</h1>

          <p className="text-[#FFF] drop-shadow-lg text-sm tracking-wider uppercase mb-8">
            ALEGREMENTE CONVIDAM PARA A CERIMÔNIA
            <br />
            DE SEU CASAMENTO
          </p>
        </div>

        <div className="w-full">
          <p className="text-[#FFF] drop-shadow-lg text-sm uppercase mb-2">SETEMBRO</p>

          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-[#FFF] w-16" />
            <p className="text-[#FFF] drop-shadow-lg text-5xl font-serif mx-4">13</p>
            <div className="h-px bg-[#FFF] w-16" />
          </div>

          <div className="flex items-center justify-center mb-4">
            <p className="text-[#FFF] drop-shadow-lg text-sm uppercase mr-4">SÁBADO</p>
            <p className="text-[#FFF] drop-shadow-lg text-sm uppercase">ÀS 16H</p>
          </div>

          <p className="text-[#FFF] drop-shadow-lg text-lg mb-6">2025</p>

          <div className="mb-12">
            <p className="text-[#FFF] drop-shadow-lg text-sm uppercase font-medium">Estância Pico do Nascer</p>
            <p className="text-[#FFF] drop-shadow-lg text-xs">MANGUERINHA - PR</p>
          </div>
        </div>

        <div className="w-full">
          <Button
            onClick={handleLocationClick}
            className="w-full max-w-xs bg-[#9C8B56] hover:bg-[#8A7A4A] text-white rounded-full py-4 px-8 text-sm font-medium transition-all duration-300 shadow-lg"
          >
            <MapPin className="w-4 h-4 mr-2" />
            VER LOCALIZAÇÃO
          </Button>
        </div>
      </div>
    </div>
  )
}

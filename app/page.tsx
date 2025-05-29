"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function WeddingInvitation() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVh()
    window.addEventListener("resize", setVh)
    return () => window.removeEventListener("resize", setVh)
  }, [])

  const handleLocationClick = () => {
    const address = "Estância Pico do Nascer, Manguerinha, PR"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <div className="relative w-full min-h-[calc(var(--vh,1vh)*100)] overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/wedding-background.jpeg')" }}
      />
      <div className="absolute inset-0 z-5 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-8 text-center space-y-6">
        <div className="space-y-4">
          <div className="text-white drop-shadow-lg text-2xl font-serif tracking-widest">
            L <span className="mx-1">|</span> W
          </div>
          <div className="px-2">
            <p className="text-white drop-shadow-lg text-sm font-light italic">
              &quot;O AMOR É PACIENTE, É BONDOSO, NÃO INVEJA, NÃO SE VANGLORIA, NÃO SE ORGULHA.&quot;
            </p>
            <p className="text-white drop-shadow-lg text-xs mt-1">1 CORÍNTIOS 13:4</p>
          </div>
        </div>

        {/* Names */}
        <div className="space-y-2">
          <h1 className="text-white drop-shadow-lg text-4xl font-serif">LETICIA</h1>
          <div className="text-white drop-shadow-lg text-5xl font-serif font-light">&</div>
          <h1 className="text-white drop-shadow-lg text-4xl font-serif">WILLIAN</h1>
          <p className="text-white drop-shadow-lg text-sm tracking-wider uppercase">
            ALEGREMENTE CONVIDAM PARA A CERIMÔNIA<br />DE SEU CASAMENTO
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-white drop-shadow-lg text-sm uppercase">SETEMBRO</p>

          <div className="flex items-center justify-center">
            <div className="h-px bg-white w-12" />
            <p className="text-white drop-shadow-lg text-4xl font-serif mx-4">13</p>
            <div className="h-px bg-white w-12" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <p className="text-white drop-shadow-lg text-sm uppercase">SÁBADO</p>
            <p className="text-white drop-shadow-lg text-sm uppercase">ÀS 16H</p>
          </div>

          <p className="text-white drop-shadow-lg text-lg">2025</p>

          <div>
            <p className="text-white drop-shadow-lg text-sm uppercase font-medium">Estância Pico do Nascer</p>
            <p className="text-white drop-shadow-lg text-xs">MANGUERINHA - PR</p>
          </div>
        </div>

        <div className="w-full">
          <Button
            onClick={handleLocationClick}
            className="w-full max-w-xs bg-[#9C8B56] hover:bg-[#8A7A4A] text-white rounded-full py-3 px-6 text-sm font-medium transition-all duration-300 shadow-lg"
          >
            <MapPin className="w-4 h-4 mr-2" />
            VER LOCALIZAÇÃO
          </Button>
        </div>
      </div>
    </div>
  )
}
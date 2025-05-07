"use client"

import type React from "react"

import Link from "next/link"
import { Calendar, MapPin, Heart, Clock, Utensils, Music } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function WeddingInvitation() {
  return (
    <main id="conteudo-pdf" className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-wedding.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-4">Leticia & Willian</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Convidam para seu casamento</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <p className="text-2xl md:text-3xl font-serif">13.09.2025</p>
            <div className="hidden md:block h-1 w-1 rounded-full bg-white mx-2" />
            <p className="text-2xl md:text-3xl font-serif">16:00</p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <Heart className="h-8 w-8 text-white" />
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-gray-800">Cerimônia</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 flex flex-col items-center">
              <Calendar className="h-12 w-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">Data e Hora</h3>
              <p className="text-gray-600 mb-1">06 de Setembro de 2025</p>
              <p className="text-gray-600">10:00</p>
            </div>
            <div className="flex-1 flex flex-col items-center mt-8 md:mt-0">
              <MapPin className="h-12 w-12 text-rose-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">Local</h3>
              <p className="text-gray-600 mb-1">Capela da Igreja Matriz São Roque</p>
              <p className="text-gray-600 mb-4">R. das, 315 - Cel. Vivida, PR</p>
              <Link href="https://maps.app.goo.gl/bW2PUNsqF4gtoo7VA" target="_blank">
                <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50">
                  Ver no Google Maps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/reception-wedding.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-white">Festa 🎉</h2>
          <div className="bg-white/90 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-1 flex flex-col items-center">
                <Clock className="h-12 w-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Horário</h3>
                <p className="text-gray-600">A partir das 16:00</p>
              </div>
              <div className="flex-1 flex flex-col items-center mt-8 md:mt-0">
                <MapPin className="h-12 w-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Local</h3>
                <p className="text-gray-600 mb-1">Estância Pico do Nascer</p>
                <p className="text-gray-600 mb-4">Manguerinha, PR</p>
                <Link href="https://maps.app.goo.gl/HrqbYgjsFo4F3uLj6" target="_blank">
                  <Button variant="outline" className="border-rose-400 text-rose-500 hover:bg-rose-50">
                    Ver no Google Maps
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-gray-800">Instruções da Festa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-rose-50 p-4 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Buffet</h3>
              <p className="text-gray-600">Jantar ao estilo festival de churrasco, com carnes suculentas e clima descontraído.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-50 p-4 rounded-full mb-4">
                <Music className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Música</h3>
              <p className="text-gray-600">Grupo de pagode ao vivo para animar a noite.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-50 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">Duração</h3>
              <p className="text-gray-600">A festa terminará às 12:00 (do dia seguinte).</p>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <h2 className="font-serif text-3xl mb-4">Leticia & Willian</h2>
        <p className="mb-6">Esperamos você no nosso grande dia!</p>
      </footer>
    </main>
  )
}

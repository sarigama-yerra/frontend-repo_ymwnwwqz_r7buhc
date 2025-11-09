import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Open to work & collaborations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Building modern web experiences with a playful, interactive touch
            </h1>
            <p className="text-gray-700 text-lg max-w-prose">
              I’m a full‑stack developer crafting fast, accessible apps — blending clean design, delightful 3D, and robust backends.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm shadow-sm hover:shadow-md transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 px-5 py-3 text-sm hover:bg-gray-50">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white via-transparent to-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}

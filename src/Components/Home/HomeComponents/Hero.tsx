import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { HiArrowRight, HiOutlineDownload } from 'react-icons/hi';

const socials = [
  { icon: FaGithub, href: 'https://github.com/TheSheffard', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/emmanuel-enemaku-b3893435a', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/80530', label: 'WhatsApp' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Happy Clients' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-28 pb-16 dark:bg-gray-950 sm:px-6 lg:px-8"
    >
      {/* Background grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-600/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/20" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Top: image left + text right, but with an editorial feel */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Image — takes 5 columns, offset styling */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              {/* Backdrop card */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-90" />
              {/* Main image card */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
                <img
                  src="/MyImage.png"
                  alt="Portrait of Emmanuel Enemaku"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* Overlay chip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-4 py-3 backdrop-blur-md dark:bg-gray-900/80">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-indigo-100 p-1.5 dark:bg-indigo-950">
                      <SiReact className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        React Specialist
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Frontend + Backend
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
                    ● Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text — takes 7 columns */}
          <div className="lg:col-span-7 lg:pl-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
              ✦ Portfolio 2025
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Emmanuel
              </span>
              .
              <br />
              I build things for the web.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Full-stack developer with 3+ years of experience crafting modern, responsive
              web applications with React, Node.js, and modern databases — solutions that
              are both beautiful and functional.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                View Projects
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/Emmanuel-Enemaku-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-900 transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
              >
                Download CV
                <HiOutlineDownload className="h-4 w-4" />
              </a>

              {/* Socials inline */}
              <div className="flex items-center gap-2 sm:ml-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-gray-200 p-2.5 text-gray-500 transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-800 dark:text-gray-400 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: stats bar */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-6 text-center dark:bg-gray-950"
            >
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6 ">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-xl p-3">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <div className="ml-4 ">
                    <p className="font-medium">Email</p>
                    <p className="mt-1 flex flex-wrap">Emmanueltokyo24@gmail.com</p>
                  </div>
                </div>
                <a href="https://github.com/TheSheffard" className="flex gap-3  w-fit items-center">
                  <div className="bg-white bg-opacity-20  rounded-xl p-3">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <p className='font-semibold'>My GitHub</p>

                </a>
                <a href="www.linkedin.com/in/emmanuel-enemaku-b3893435a" className="flex gap-3  w-fit items-center">
                  <div className="bg-white bg-opacity-20  rounded-xl p-3">
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                  <p className='font-semibold'>My LinkedIn</p>

                </a>
              </div>
              <div className="mt-10">
                <h4 className="text-xl font-bold mb-4">Based in</h4>
                <p>FCT Abuja, Nigeria</p>

              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
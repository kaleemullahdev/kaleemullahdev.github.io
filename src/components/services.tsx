import Image from 'next/image'

type Service = {
  title: string
  icon: string
  description: string
}

const services: Service[] = [
  {
    title: 'Web development',
    icon: 'web-development.svg',
    description:
      'Building responsive websites that work seamlessly across all devices. I write clean, efficient code that follows best practices and ensures optimal performance.',
  },
  {
    title: 'Performance Optimization',
    icon: 'performance-optimization.svg',
    description:
      'Enhancing website speed and efficiency through code optimization, asset management, and implementation of modern web techniques for better user experience and SEO performance.',
  },
  {
    title: 'Website Maintenance',
    icon: 'web-maintenance.svg',
    description:
      'Providing ongoing support and maintenance to ensure your website remains secure, up-to-date, and functioning optimally at all times.',
  },
]
export const Services = () => {
  return (
    <section className="section-container text-center" id="services">
      <div className="flex flex-col items-center gap-12 z-30 rounded-xl">
        <h3 className="text-headingText lg:text-3xl md:text-2xl text-2xl font-bold leading-3 text-center w-full">
          My Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {services?.map((service, key) => {
            return <ServiceCards {...service} key={key} />
          })}
        </div>
      </div>
    </section>
  )
}

const ServiceCards: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col py-5 bg-white rounded-lg shadow-md shadow-primary overflow-hidden h-full ">
      <div className="relative h-20 flex justify-center py-10">
        <Image
          src={`/${icon}`}
          alt="Project 1"
          quality={90}
          width={20}
          height={20}
          className="w-20 h-20 self-center"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg text-textPrimary font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-left">{description}</p>
      </div>
    </div>
  )
}

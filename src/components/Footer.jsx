import React from 'react'

const Footer= () => {
  return (
    <div>
<footer className="bg-red-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Discover our collection of boutique fashion, offering unique styles and personalized service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-sm hover:text-gray-400">Contact Us</a></li>
              <li><a href="/shipping" className="text-sm hover:text-gray-400">Shipping & Returns</a></li>
              <li><a href="/Index" className="text-sm hover:text-gray-400">Back to Home</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" className="text-xl hover:text-gray-400">Facebook</a></li>
              <li><a href="https://instagram.com" className="text-xl hover:text-gray-400">Instagram</a></li>
              <li><a href="https://pinterest.com" className="text-xl hover:text-gray-400">Pinterest</a></li>
            </ul>
          </div>
          </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-lg">
          <p>&copy; {new Date().getFullYear()} Nijah Richardson Famous Boutique.</p>
        </div>
        </div>
    </footer>
    </div>
  )}
export default Footer;
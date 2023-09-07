export default function RemeraCard({ nombre, precio }) {
  return (
    <li>
      <a href="#" class="block overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div class="relative pt-3 bg-white">
          <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {nombre}
          </h3>

          <p class="mt-2">
            <span class="sr-only"> Precio normal </span>

            <span class="tracking-wider text-gray-900"> £{precio} GBP </span>
          </p>
        </div>
      </a>
    </li>
  );
}

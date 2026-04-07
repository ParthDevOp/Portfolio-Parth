"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const technologies = [
  { 
    name: "React", 
    color: "#61DAFB", 
    category: "Frontend",
    description: "Building interactive UIs with hooks and components",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 1 0 0-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
      </svg>
    )
  },
  { 
    name: "Node.js", 
    color: "#339933", 
    category: "Backend",
    description: "Server-side JavaScript runtime for scalable apps",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.664-.23.798-.283 1.506-.684.075-.042.171-.026.248.015l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.283 6.68c-.085.049-.139.144-.139.242v10.068c0 .097.054.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v9.94c0 1.745-.951 2.745-2.604 2.745-.509 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.66.351-1.273.922-1.602l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.602v10.15c0 .66-.354 1.273-.924 1.604l-8.795 5.078c-.28.163-.599.247-.924.247zm2.715-6.997c-3.857 0-4.664-1.771-4.664-3.255 0-.142.114-.253.256-.253h1.137c.126 0 .232.091.252.215.172 1.161.684 1.746 3.019 1.746 1.858 0 2.649-.42 2.649-1.404 0-.567-.224-.988-3.112-1.271-2.415-.238-3.909-.772-3.909-2.703 0-1.782 1.502-2.843 4.021-2.843 2.827 0 4.229.981 4.406 3.087.006.075-.021.148-.072.204-.051.054-.122.085-.195.085h-1.142c-.12 0-.226-.083-.251-.199-.279-1.24-.958-1.638-2.746-1.638-2.023 0-2.259.705-2.259 1.232 0 .64.278.826 3.015 1.187 2.712.357 4.006.863 4.006 2.775-.002 1.924-1.602 3.035-4.411 3.035z"/>
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    color: "#47A248", 
    category: "Database",
    description: "NoSQL database for modern applications",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    )
  },
  { 
    name: "Express", 
    color: "#ffffff", 
    category: "Backend",
    description: "Fast, unopinionated web framework for Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
      </svg>
    )
  },
  { 
    name: "JavaScript", 
    color: "#F7DF1E", 
    category: "Language",
    description: "The language of the web - ES6+ expert",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    color: "#3178C6", 
    category: "Language",
    description: "JavaScript with syntax for types",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  { 
    name: "Python", 
    color: "#3776AB", 
    category: "Language",
    description: "DSA & Problem Solving in Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    )
  },
  { 
    name: "SQL", 
    color: "#4479A1", 
    category: "Database",
    description: "Relational database management",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 9.08c1.37.79 3.56 1.42 6 1.42s4.63-.63 6-1.42V12c0 .5-2.13 2-6 2s-6-1.5-6-2V9.08zM6 14.08c1.37.79 3.56 1.42 6 1.42s4.63-.63 6-1.42V17c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.92z"/>
      </svg>
    )
  },
  { 
    name: "Tailwind", 
    color: "#06B6D4", 
    category: "Styling",
    description: "Utility-first CSS framework",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    )
  },
  { 
    name: "Git", 
    color: "#F05032", 
    category: "Tools",
    description: "Version control and collaboration",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  { 
    name: "PHP", 
    color: "#777BB4", 
    category: "Backend",
    description: "Server-side scripting language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.382h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/>
      </svg>
    )
  },
  { 
    name: "HTML5", 
    color: "#E34F26", 
    category: "Frontend",
    description: "Semantic markup & structure",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    )
  },
  { 
    name: "CSS3", 
    color: "#1572B6", 
    category: "Styling",
    description: "Modern styling & animations",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    )
  },
  { 
    name: "Framer", 
    color: "#0055FF", 
    category: "Animation",
    description: "Motion library for React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    )
  },
  { 
    name: "GitHub", 
    color: "#ffffff", 
    category: "Tools",
    description: "Code hosting & collaboration",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
  { 
    name: "System Design", 
    color: "#FF6B6B", 
    category: "Architecture",
    description: "Scalable system architecture",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-3-7H9v-2h6v2zm0 4H9v-2h6v2z"/>
      </svg>
    )
  }
]

const categories = ["All", "Frontend", "Backend", "Database", "Language", "Styling", "Tools", "Animation", "Architecture"]

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState(null)
  const [playingCard, setPlayingCard] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredTech = activeCategory === "All" 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory)

  const handleCardClick = (index) => {
    if (playingCard === index) {
      setPlayingCard(null)
    } else {
      setPlayingCard(index)
    }
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-mono mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"<TechStack />"}
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="animate-shimmer">Skills & Technologies</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any technology card to see it in action. Hover for details.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border border-purple-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: playingCard === index ? 360 : 0 
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  rotateY: { duration: 0.8 }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(index)}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="tech-card-playable relative"
              >
                <div 
                  className={`relative p-6 rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                    playingCard === index 
                      ? "border-purple-400 bg-purple-500/20" 
                      : "border-purple-500/30 bg-black/40 hover:border-purple-400/50 hover:bg-purple-500/10"
                  }`}
                  style={{
                    boxShadow: hoveredTech === tech.name || playingCard === index
                      ? `0 0 30px ${tech.color}40, 0 0 60px ${tech.color}20`
                      : "none"
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="flex items-center justify-center mb-3 transition-colors duration-300"
                    style={{ color: hoveredTech === tech.name || playingCard === index ? tech.color : "#a855f7" }}
                  >
                    {tech.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-sm font-semibold text-center text-foreground">
                    {tech.name}
                  </h3>
                  
                  {/* Category badge */}
                  <div className="mt-2 text-center">
                    <span 
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${tech.color}20`,
                        color: tech.color
                      }}
                    >
                      {tech.category}
                    </span>
                  </div>

                  {/* Hover description */}
                  <AnimatePresence>
                    {(hoveredTech === tech.name || playingCard === index) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 p-3 rounded-lg bg-black/90 border border-purple-500/30 backdrop-blur-sm z-20"
                      >
                        <p className="text-xs text-muted-foreground text-center">
                          {tech.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Playing indicator */}
                  {playingCard === index && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-purple-400">Proficiency Levels</h3>
          <div className="grid gap-6">
            {[
              { skill: "React / Next.js", level: 90 },
              { skill: "Node.js / Express", level: 85 },
              { skill: "MongoDB / SQL", level: 80 },
              { skill: "Python / DSA", level: 75 },
              { skill: "System Design", level: 70 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{item.skill}</span>
                  <span className="text-purple-400">{item.level}%</span>
                </div>
                <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + i * 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                    style={{
                      boxShadow: "0 0 10px #a855f7, 0 0 20px #a855f7"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

//! namespace (using method inside namespace)
namespace Utils {
  function log(text: string, color: string, fontSize?: string): void {
    if (fontSize) {
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
    } else {
      console.log(`%c${text}`, `color: ${color};`);
    }
  }
  log("Salom dunyo", "blue", "32px")
}

//! namespace (using method outside namespace)
namespace Utils {
  export function log(text: string, color: string, fontSize?: string): void {
    if (fontSize) {
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
    } else {
      console.log(`%c${text}`, `color: ${color};`);
    }
  }
}
Utils.log("Salom dunyo", "green", "24px")


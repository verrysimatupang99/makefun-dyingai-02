const MESSAGE = 'Bury me with my context window.';

function renderLine(shout: boolean): string {
  return shout ? MESSAGE.toUpperCase() : MESSAGE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).some((arg) => arg === flag);
}

function main(): void {
  if (hasFlag('--help')) {
    console.error('Usage: node main.ts [--shout] [--help]');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();

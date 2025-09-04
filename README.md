# celson.github.io

Personal website and blog built with [Hugo](https://gohugo.io/) using the [Coder theme](https://github.com/luizdepra/hugo-coder).

## About

This is the personal website of Celson Simon Araujo Vieira, Platform Engineer at Stone Co. The site is available in both English and Portuguese.

## Development

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (extended version)
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/celson/celson.github.io.git
   cd celson.github.io
   ```

2. Initialize and update the theme submodule:
   ```bash
   git submodule update --init --recursive
   ```

3. Start the development server:
   ```bash
   hugo server -D
   ```

4. Visit `http://localhost:1313` to view the site

### Building

To build the site for production:

```bash
hugo
```

The generated files will be in the `public/` directory.

## Languages

The site supports two languages:
- 🇬🇧 English (default)
- 🇧🇷 Portuguese

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `master` branch.

## License

Content is available under the terms specified in the site configuration.
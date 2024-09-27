module.exports = {
    packagerConfig: {
      asar: true,
      icon: './public/logo.png'
    },
    rebuildConfig: {},
    makers: [
      {
        name: '@electron-forge/maker-squirrel',
        config: {},
      },
      {
        name: '@electron-forge/maker-zip',
        platforms: ['darwin'],
      },
      {
        name: '@electron-forge/maker-deb',
        config: {},
      },
      {
        name: '@electron-forge/maker-rpm',
        config: {},
      },
      {
        name: '@electron-forge/maker-dmg',
        platforms: ['darwin'],
        config: {
          icon: './public/logo.png',
          format: 'ULFO'
        }
      }
    ],
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'michaelMondoro',
            name: 'insight_browser'
          },
          prerelease: false,
          draft: true
        }
      }
    ],
    plugins: [
      {
        name: '@electron-forge/plugin-auto-unpack-natives',
        config: {},
      },
    ],
  };
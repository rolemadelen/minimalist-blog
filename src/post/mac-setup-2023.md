---
title: 'Mac Setup 2022'
posttitle: 'Mac Setup 2022'
date: '2022-12-25 08:00:00'
updated: '2023-02-28 08:00:00'
---

Here I'm sharing my Mac setup for web development which I got inspired by [Robin Wieruch's Mac Setup](https://www.robinwieruch.de/mac-setup-web-development/).

---

## MacBook Pro

- 13-inch
- 2 GHz Quad-Core Intel Core i5
- Intel Iris Plus Graphics 1536 MB
- 16 GB RAM
- 512 GB SSD
- DVORAK (English), Japanese (Romaji), Korean (3-Beolsik)
- ~~macOS Monterey~~
- macOS Ventura 13.2.1

## System Preferences

- Notifications
  - ~~Off, except calendar, mail, and reminders~~
  - Off except Calendar, LINE, Mail, Messages, Reminders, and Slack
- Sound
  - Play sound on startup - [Off]
- General
  - Sharing
    - Turn off ~~"AirPlay Receiver" and~~ all sharings / Caching
    - Change local hostname
    - Also terminal:
      - `sudo scutil --set ComputerName "newname"`
      - `sudo scutil --set LocalHostName "newname"`
      - `sudo scutil --set HostName "newname"`
    - AirDrop & Handoff
      - AirPlay Receiver - [OFF]
- Appearance
  - Appearance - Auto
  - Accent Color - Blue
  - Show scroll bars - When scrolling
- Control Center
  - ~~Wi-Fi~~ | Bluetooth | Airdrop | Stage Manager | ~~Sound~~ | Now Playing | Spotlight | Siri | Time Machine
    - Show in menu bar - [OFF]
  - Battery
    - Show in Menu Bar - [ON]
    - Show Percentage - [ON]
  - Clock
    - "use a 24-hour clock"
    - "announce the time" -> on the hour
- Siri
  - disable
- Spotlight
  - Disable all except 'Applications' and 'System Preferences'
- Privacy and Security
  - Turn on FileVault
  - Turn on Lockdown Mode
- Desktop & Dock
  - Dock
    - Size - close to small
    - Magnification - slightly larger than the size
    - Position on screen - ~~Right~~ Bottom
    - remove most apps from Dock
    - Automatically hide and show the Dock - [ON]
    - Show recent apps in Dock - [OFF]
    - Show indicators for open apps - [ON]
  - Menu Bar
    - Automatically hide and show the menu bar - [Always]
  - Windows & Apps
    - Close windows when quitting an app - [ON]
    - Default web browser - [Arc]
  - Mission Control
    - Hot Corners: disable all
- Display
  - Nightshift - Custom 22:30 to 5:00
- Lock Screen
  - Start Screen Saver when inactive - [Never]
  - Turn display off on battery when inactive - [For 2 minutes]
  - Turn display off on power adapter when inactive - [For 10 minutes]
  - Require password after screen saver begins or display is turned off - [Immediately]
- Touch ID & Password
  - Turn on 'use apple watch to unlock your app and your Mac'
- Keyboard
  - Text Input
    - Dvorak
    - Japanese - Romaji
    - 3-Set Korean (390)
  - Text
    - "correct spelling automatically" OFF
    - "capitalize words automatically" OFF
    - "add period with double-space" OFF
    - "use smart quotes and dashes" OFF
    - use "abc" for double quotes
    - use 'abc' for single quotes
  - Dictation
    - 'press control key twice' to activate
- Trackpad
  - Silent clicking - [ON]
  - Tap top Click - [ON]
  - Tracking speed - 7/10
  - Click - Firm
- Finder Settings
  - Tags
    - disable all
  - Sidebar
    - activate all Favorites
  - Advanced
    - "show all filename extensions" ON
      - "remove items from the trash after 30 days" ON
  - View -> Show Preview (for images)

## System Preferences (terminal)

```sh
# take screenshots as jpg (usually smaller size) and not png
defaults write com.apple.screencapture type jpg

# do not open previous previewed files (e.g. PDFs) when opening a new one
defaults write com.apple.Preview ApplePersistenceIgnoreState YES

# show Library folder
chflags nohidden ~/Library

# show path bar
defaults write com.apple.finder ShowPathbar -bool true

# show status bar
defaults write com.apple.finder ShowStatusBar -bool true

killall Finder;
```

## Homebrew

```sh
# install homebrew as a package manager for macOS
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# update everything in homebrew to recent version
brew update

# install GUI applications
brew install --cask \
 bitwarden \
 iterm2 \
 visual-studio-code \
 discord \
 slack \
 imageoptim \
 raycast \
 spotify

# install terminal applications
brew install \
 wget \
 exa \
 git \
 nvm \
 pnpm \
 graphicsmagick
```

## OH MY ZSH

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# omz update
source ~/.zshrc
```

## Oh My Zsh Theme + Fonts

```sh
brew install starship
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

## exa setting

Set aliases for `exa`:

```sh
if [[ $(command -v exa) ]]; then
  alias e='exa --icons'
  alias l=e
  alias ls=e
  alias ea='exa -a --icons'
  alias la=ea
  alias ee='exa -aal --icons'
  alias ll=ee
  alias et='exa -T -L 3 -a -I "node_modules|.git|.cache" --icons'
  alias lt=et
  alias eta='exa -T -a -I "node_modules|.git|.cache" --color=always --icons | less -r'
  alias lta=eta
fi
```

## VS Code

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Hide](https://marketplace.visualstudio.com/items?itemName=sirmspencer.vscode-autohide)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VSCode React Refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
- [The Doki Theme](https://marketplace.visualstudio.com/items?itemName=unthrottled.doki-theme)

## Happy Hacking Keyboard

My mac had an issue with recognizing the keyboard.
It couldn't read `international1` key which was used for backtick(\`) and tilde(~).

I used [Karabiner](https://karabiner-elements.pqrs.org/) to remap `international1` to `grave_accent_and_tilde` and it works great :)

## Other Apps

- Arc - <https://thebrowser.company/>
- Nota - <https://nota.md>
- ~~Setapp - <https://setapp.com/>~~
- Immersed VR - <https://immersed.com/>

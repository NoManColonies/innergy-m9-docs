let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/experimental-workspace/simple-express-crud-api
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +14 server.js
badd +96 routes/books.js
badd +51 ~/Documents/innergy-workspace/innergy-m9-api/start/routes.js
badd +0 ~/Documents/innergy-workspace/innergy-m9-api/app/Controllers/Http/AuthController.js
argglobal
%argdel
edit server.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 118 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 117 + 118) / 236)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
7
normal! zo
8
normal! zo
10
normal! zo
15
normal! zo
19
normal! zo
25
normal! zo
26
normal! zo
let s:l = 14 - ((13 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 070|
wincmd w
argglobal
if bufexists("~/Documents/innergy-workspace/innergy-m9-api/app/Controllers/Http/AuthController.js") | buffer ~/Documents/innergy-workspace/innergy-m9-api/app/Controllers/Http/AuthController.js | else | edit ~/Documents/innergy-workspace/innergy-m9-api/app/Controllers/Http/AuthController.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
8
normal! zo
99
normal! zo
120
normal! zo
121
normal! zo
135
normal! zo
138
normal! zo
143
normal! zo
143
normal! zo
let s:l = 126 - ((125 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
126
normal! 042|
wincmd w
exe 'vert 1resize ' . ((&columns * 118 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 117 + 118) / 236)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

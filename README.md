# MudMixed

This project implements a way to have mixed rendermodes when using MudBlazor. 
In principle, per-page rendermode is supported out of the box in MudBlazor.
However, using this, makes the `MainLayout` static, which break interactivity
in menus, appbar, etc. Though not an ideal solution, this project explores one 
way to deal with this.
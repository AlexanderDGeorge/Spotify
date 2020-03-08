# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Artists
various = Artist.create!({ name: 'various' });
aimless = Artist.create!({ name: 'aimless' });
ambulo = Artist.create!({ name: 'Ambulo' });
arbour = Artist.create!({ name: 'Arbour'});
aso = Artist.create!({ name: 'Aso' });
athena = Artist.create!({ name: 'athena' });
bluntone = Artist.create!({ name: 'BluntOne'});
blvk = Artist.create!({ name: 'Blvk' });
brenky = Artist.create!({ name: 'brenky' });
brillion = Artist.create!({ name: 'brillion.' });
c4c = Artist.create!({ name: 'C4C' });
chrismazuera = Artist.create!({ name: 'Chris Mazuera' });
clapcotton = Artist.create!({ name: 'Clap Cotton' });
cloudi = Artist.create!({ name: 'cloudi' });
cocabona = Artist.create!({ name: 'cocabona' });
dontcry = Artist.create!({ name: 'Dontcry' });
dlj = Artist.create!({ name: 'DLJ' });
drkmnd = Artist.create!({ name: 'drkmnd' });
dryhope = Artist.create!({ name: 'dryhope' });
enra = Artist.create!({ name: 'ENRA' });
fatb = Artist.create!({ name: 'Fatb' });
flovry = Artist.create!({ name: 'Flovry' });
glimlip = Artist.create!({ name: 'Glimlip' });
gmills = Artist.create!({ name: 'G Mills' });
goosetaf = Artist.create!({ name: 'goosetaf' });
h1 = Artist.create!({ name: 'H.1' });
hmsurf = Artist.create!({ name: 'HM Surf' });
imagiro = Artist.create!({ name: 'imagiro' });
jhfly = Artist.create!({ name: 'jhfly' });
jordychandra = Artist.create!({ name: 'Jordy Chandra' });
jsan = Artist.create!({ name: "j'san" });
kokoro = Artist.create!({ name: 'kokoro' });
kupla = Artist.create!({ name: 'Kupla' });
lesspeople = Artist.create!({ name: 'less.people' });
mello = Artist.create!({ name: 'mell-ø' });
mondoloops = Artist.create!({ name: 'Mondo Loops' });
mvdb = Artist.create!({ name: 'Mvdb' });
pandrezz = Artist.create!({ name: 'Pandrezz '});
psalmtrees = Artist.create!({ name: 'Psalm Trees' });
purrplecat = Artist.create!({ name: 'Purrple Cat' });
sarcasticsounds = Artist.create!({ name: 'Sarcastic Sounds' });
tenderspring = Artist.create!({ name: 'tender spring' });
wys = Artist.create!({ name: 'WYS' });

# Albums
amstudysession = Album.create!({ name: '1 Am. Study Session', year: 2019, artist_id: various.id });
cloudsurfing = Album.create!({ name: 'Cloud Surfing', year: 2020, artist_id: bluntone.id });
laventureep = Album.create!({ name: "L'vanenture EP", year: 2020, artist_id: c4c.id });
persceptive = Album.create!({ name: 'Perspective', year: 2020, artist_id: chrismazuera.id });
jirodreams = Album.create!({ name: 'Jiro Dreams', year: 2020, artist_id: dontcry.id });
soundsandthings = Album.create!({ name: 'sounds and things', year: 2016, artist_id: jhfly.id });

# Songs
snowman = Song.create!({ name: 'Snowman', duration: '3:15', artist_id: wys.id, album_id: amstudysession.id });
cottoncloud = Song.create! ({ name: 'Cotton Cloud', duration: '2:03', artist_id: fatb.id, album_id: amstudysession.id });
theplacesweusedtowalk = Song.create! ({ name: 'The Places We Used to Walk', duration: '2:16', artist_id: tenderspring.id, album_id: amstudysession.id });
woolgloves = Song.create! ({ name: 'Wool Gloves', duration: '2:46', artist_id: imagiro.id, album_id: amstudysession.id });
imsorry = Song.create!({ name: "I'm Sorry", duration: '2:17', artist_id: glimlip.id, album_id: amstudysession.id });
nova = Song.create!({ name: 'Nova', duration: '1:44', artist_id: mello.id, album_id: amstudysession.id });
carriedaway = Song.create!({ name: 'Carried Away', duration: '1:55', artist_id: goosetaf.id, album_id: amstudysession.id });
snowsand = Song.create!({ name: 'Snow & Sand', duration: '2:45', artist_id: jsan.id, album_id: amstudysession.id });
singlephial = Song.create!({ name: 'Single Phial', duration: '1:44', artist_id: hmsurf.id, album_id: amstudysession.id });
drops = Song.create!({ name: 'Drops', duration: '2:03', artist_id: cocabona.id, album_id: amstudysession.id });
espresso = Song.create!({ name: 'Espresso', duration: '2:42', artist_id: aso.id, album_id: amstudysession.id });
luminescence = Song.create!({ name: 'luminescence', duration: '1:40', artist_id: ambulo.id, album_id: amstudysession.id });
explorers = Song.create!({ name: 'Explorers', duration: '2:03', artist_id: dlj.id, album_id: amstudysession.id });
wishyouweremine = Song.create!({ name: 'Wish You Were Mine', duration: '2:02', artist_id: sarcasticsounds.id, album_id: amstudysession.id });
reflections = Song.create!({ name: 'Reflections', duration: '2:02', artist_id: bluntone.id, album_id: amstudysession.id });
alonetime = Song.create!({ name: 'Alone Time', duration: '3:23', artist_id: purrplecat.id, album_id: amstudysession.id });
owlsofthenight = Song.create!({ name: 'Owls of the Night', duration: '2:22', artist_id: kupla.id, album_id: amstudysession.id });
amber = Song.create!({ name: 'Amber', duration: '1:29', artist_id: enra.id, album_id: amstudysession.id });
fever = Song.create!({ name: 'Fever', duration: '2:33', artist_id: psalmtrees.id, album_id: amstudysession.id });
circle = Song.create!({ name: 'Circle', duration: '1:53', artist_id: h1.id, album_id: amstudysession.id });
cuddlin = Song.create!({ name: 'Cuddlin', duration: '2:57', artist_id: pandrezz.id, album_id: amstudysession.id });
latenightcall = Song.create!({ name: 'Late Night Call', duration: '2:15', artist_id: jordychandra.id, album_id: amstudysession.id });
gyoza = Song.create!({ name: 'Gyoza', duration: '2:00', artist_id: lesspeople.id, album_id: amstudysession.id });
keyframe = Song.create!({ name: 'Keyframe', duration: '2:00', artist_id: gmills.id, album_id: amstudysession.id });
breeze = Song.create!({ name: 'Breeze', duration: '1:35', artist_id: mvdb.id, album_id: amstudysession.id });
lunardrive = Song.create!({ name: 'Lunar Drive', duration: '3:09', artist_id: mondoloops.id, album_id: amstudysession.id });
steps = Song.create!({ name: 'Steps', duration: '2:31', artist_id: dryhope.id, album_id: amstudysession.id });
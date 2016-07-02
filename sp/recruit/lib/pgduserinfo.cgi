#!/usr/bin/perl

##### pgduserinfo.cgi
# 
# user infomation
# 
# usage:
# require 'pgduserinfo.cgi';
# 
# history:
# 2008/02/07 ��ʌ��ɏC��
# 2003/08/25 �쐬
# 
# by am@pgd.jp


package Userinfo;

# ���[�U���S�ʂ̎擾
# my %userinfo = ();
# &Userinfo::GetUserInfo(\%userinfo);
sub GetUserInfo {
	
	# �����̓ǂݍ���
	my($userinfo) = @_;
	$userinfo->{'carrier'} = &Userinfo::GetMobileCarrier;
	$userinfo->{'remote_host'} = &Userinfo::GetRemoteHost;
	$userinfo->{'remote_addr'} = $ENV{'REMOTE_ADDR'};
	$userinfo->{'user_agent'} = $ENV{'HTTP_USER_AGENT'};
	$userinfo->{'mobile_device_id'} = &Userinfo::GetMobileDeviceID;
	$userinfo->{'mobile_device_id_check'} = &Userinfo::CheckMobileDeviceIDEnable;
	$userinfo->{'mobile_sim_id'} = &Userinfo::GetMobileSimID;
	
	return '';
	
}


# �����[�g�z�X�g�̎擾
# &Userinfo::GetRemoteHost;
# return REMOTE_HOST or REMOTE_ADDR
sub GetRemoteHost {
	
	my $remote_host;
	
	# �����[�g�z�X�g���擾�ł��Ȃ��ꍇ,�܂���IP�A�h���X�̏ꍇDNS������
	if (($ENV{'REMOTE_HOST'} eq '') || ($ENV{'REMOTE_HOST'} eq $ENV{'REMOTE_ADDR'})) {
		
		$remote_host = gethostbyaddr(pack("C4",split(/\./,$ENV{'REMOTE_ADDR'})),2);
		
	} else {
		
		$remote_host = $ENV{'REMOTE_HOST'};
		
	}
	
	return "$remote_host";
	
}

# �L�����A����
# &Userinfo::GetMobileCarrier;
sub GetMobileCarrier {
	
	my $carrier;
	my $agent = $ENV{'HTTP_USER_AGENT'};
	my $host = &Userinfo::GetRemoteHost;
	
	# docomo
	if ($host =~ /docomo\.ne\.jp/i) {
		
		$carrier = 'docomo';
		
	# Ez-Web
	} elsif ($host =~ /ido\.ne\.jp/i || $host =~ /ezweb\.ne\.jp/i) {
		
		$carrier = 'au';
		
	# softbank
	} elsif ($host =~ /jp\-[\w]\.ne\.jp/i) {
		
		$carrier = 'softbank';
		
	# PC
	} else {
		
		$carrier = 'pc';
		
	}
	
	return "$carrier";
	
}


# �[��ID�̎擾
# &Userinfo::GetMobileDeviceID;
sub GetMobileDeviceID {
	
	my $remote_host = &Userinfo::GetRemoteHost;
	
	# Docomo
	if ($remote_host =~ /docomo\.ne\.jp/i) {
		if ($ENV{'HTTP_USER_AGENT'} =~ /(ser\w+)/i) { return "$1";} else { return '';}
	}
	
	# Ez-Web
	elsif ($remote_host =~ /ido\.ne\.jp/i || $remote_host =~ /ezweb\.ne\.jp/i) {
		if ($ENV{'HTTP_X_UP_SUBNO'} ne '') { return "$ENV{'HTTP_X_UP_SUBNO'}";} else { return '';}
	}
	
	# Softbank
	elsif ($remote_host =~ /jp\-[\w]\.ne\.jp/i) {
		if ($ENV{'HTTP_USER_AGENT'} =~ /(SN\w+)/) { return "$1";} else { return '';}
	}
	
	return '';
	
}

# �V���J�[�hID�̎擾
# &Userinfo::GetMobileSimID;
sub GetMobileSimID {
	
	my $remote_host = &Userinfo::GetRemoteHost;
	
	# Docomo
	if ($remote_host =~ /docomo\.ne\.jp/i) {
		if ($ENV{'HTTP_USER_AGENT'} =~ /(icc\w{20})/i) { return "$1";} else { return '';}
	}
	
	# Ez-Web
	#elsif ($remote_host =~ /ido\.ne\.jp/i || $remote_host =~ /ezweb\.ne\.jp/i) {
	#	
	#}
	
	# Softbank
	#elsif ($remote_host =~ /jp\-[\w]\.ne\.jp/i) {
	#	
	#}
	
	return '';
	
}

# �[��ID�̎擾�\���ǂ����̃`�F�b�N
# &Userinfo::CheckMobileDeviceIDEnable;
sub CheckMobileDeviceIDEnable {
	
	my $remote_host = &Userinfo::GetRemoteHost;
	
	# Docomo http://www.nttdocomo.co.jp/mc-user/i/tag/s1.html#1_8 �Q��
	if ($remote_host =~ /docomo\.ne\.jp/i) {
		
		# 3.0 ��O
		if ($ENV{'HTTP_USER_AGENT'} =~ /SO210i/i) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /SH251i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /SH251iS/) { return 0;}
		
		# 1.0
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /502i/) { return 0;}
		
		# 2.0
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /501i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /821i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /P651ps/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /R691i/) { return 0;}
		
		# 2.0 
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /F210i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /KO210i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /N210i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /P210i/) { return 0;}
		elsif ($ENV{'HTTP_USER_AGENT'} =~ /F671i/) { return 0;}
		
	}
	
	# Softbank
	elsif ($remote_host =~ /jp\-[\w]\.ne\.jp/i) {
		
		# 0x/30x/40x �n
		if ($ENV{'HTTP_USER_AGENT'} =~ /J\-PHONE\/[23]\.0\//) { return 0;}
		
	}
	
	## Ez-Web �S�Ă̒[���Ŏ擾�ł���
	#elsif ($remote_host =~ /ido\.ne\.jp/i || $remote_host =~ /ezweb\.ne\.jp/i) {
	#	
	#}
	
	return 1;
	
}

1;